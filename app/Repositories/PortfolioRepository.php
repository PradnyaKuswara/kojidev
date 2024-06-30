<?php

namespace App\Repositories;

use App\Interfaces\PortfolioInterface;
use App\Models\Portfolio;
use Illuminate\Database\DatabaseManager;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class PortfolioRepository implements PortfolioInterface
{
    private $db;

    public function __construct(DatabaseManager $db)
    {
        $this->db = $db;
    }

    public function all(): object | string
    {
        try {
            return $this->db->table('portfolios')->paginate(10);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function find(object $portfolio): object | string
    {
        try {
            return $portfolio;
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function create(array $data): bool | string
    {
        try {
            $imagePath = $data['image']->store(Portfolio::IMAGE_PATH);
            $data['image'] =  $imagePath;
            $data['slug'] = Str::slug($data['title']) . '-' . now()->format('YmdHis');
            $data['uuid'] = (string) Str::uuid();

            return $this->db->table('portfolios')->insert($data);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function update(object $portfolio, object $request)
    {
        try {
            $data = $request->validated();

            if ($request->title !== $portfolio->title) {
                $data['slug'] = Str::slug($data['title']) . '-' . now()->format('YmdHis');
            }

            if ($request->hasFile('image')) {
                Storage::delete($portfolio->image);
                $imagePath = $data['image']->store(Portfolio::IMAGE_PATH);
                $data['image'] =  $imagePath;
            } else {
                $data['image'] = $portfolio->image;
            }

            return $this->db->table('portfolios')->where('id', $portfolio->id)->update($data);
        } catch (\Exception $e) {
            return dd($e->getMessage());
        }
    }

    public function delete(object $portfolio)
    {
        try {
            $portfolio->image ?  Storage::delete($portfolio->image) : null;
            return $this->db->table('portfolios')->where('id', $portfolio->id)->delete();
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}
