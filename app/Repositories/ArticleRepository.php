<?php

namespace App\Repositories;

use App\Interfaces\ArticleInterface;
use App\Models\Article;
use Illuminate\Database\DatabaseManager;
use Illuminate\Support\Facades\Storage;

class ArticleRepository implements ArticleInterface
{
    private $db;

    public function __construct(DatabaseManager $db)
    {
        $this->db = $db;
    }
    public function all()
    {
        try {
            return $this->db->table('articles')->get();
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function find($id)
    {
        try {
            return $this->db->table('articles')->find($id);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function create($data)
    {
        try {
            $imagePath = $data['thumbnail']->store(Article::IMAGE_PATH);
            $data['thumbnail'] = Storage::url($imagePath);
            $data['slug'] = $data['title'];

            return $this->db->table('articles')->insert($data);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function update($article, $request)
    {
        try {
            $data = $request->validated();

            if ($request->title !== $article->title) {
                $data['slug'] = $data['title'];
            }

            if ($request->hasFile('thumbnail')) {
                Storage::delete($article->thumbnail);
                $imagePath = $data['thumbnail']->store(Article::IMAGE_PATH);
                $data['thumbnail'] = Storage::url($imagePath);
            } else {
                $data['thumbnail'] = $article->thumbnail;
            }

            return $article->update($data);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function delete($article)
    {
        try {
            return $article->delete();
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}