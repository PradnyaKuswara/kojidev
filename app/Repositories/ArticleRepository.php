<?php

namespace App\Repositories;

use App\Interfaces\ArticleInterface;
use App\Models\Article;
use Illuminate\Database\DatabaseManager;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ArticleRepository implements ArticleInterface
{
    private $db;

    public function __construct(DatabaseManager $db)
    {
        $this->db = $db;
    }
    public function all(): object | string
    {
        try {
            return $this->db->table('articles')->paginate(10);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function find(object $article): object | string
    {
        try {
            return $article;
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function create(array $data): bool | string
    {
        try {
            $imagePath = $data['thumbnail']->store(Article::IMAGE_PATH);
            $data['thumbnail'] =  $imagePath;
            $data['slug'] = Str::slug($data['title']) . '-' . now()->format('YmdHis');
            $data['uuid'] = (string) Str::uuid();

            return $this->db->table('articles')->insert($data);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function update(object $article, object $request): bool | string
    {
        try {
            $data = $request->validated();

            if ($request->title !== $article->title) {
                $data['slug'] = Str::slug($data['title']) . '-' . now()->format('YmdHis');
            }

            if ($request->hasFile('thumbnail')) {
                Storage::delete($article->thumbnail);
                $imagePath = $data['thumbnail']->store(Article::IMAGE_PATH);
                $data['thumbnail'] =  $imagePath;
            } else {
                $data['thumbnail'] = $article->thumbnail;
            }

            return $this->db->table('articles')->where('id', $article->id)->update($data);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function delete(object $article): bool | string
    {
        try {
            $article->thumbnail ?  Storage::delete($article->thumbnail) : null;
            return $this->db->table('articles')->where('id', $article->id)->delete();
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}