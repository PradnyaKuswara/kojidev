<?php

namespace App\Repositories;

use App\Interfaces\ArticleInterface;
use App\Interfaces\SertificateInterface;
use App\Models\Article;
use Illuminate\Database\DatabaseManager;
use Illuminate\Support\Facades\Storage;

class SertificateRepository implements SertificateInterface
{
    private $db;

    public function __construct(DatabaseManager $db)
    {
        $this->db = $db;
    }
    public function all(): object | string
    {
        try {
            return $this->db->table('sertificates')->paginate(10);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function find(object $sertificate): object | string
    {
        try {
            return $sertificate;
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function create(array $data): bool | string
    {
        try {
            $data['uuid'] = (string) \Illuminate\Support\Str::uuid();

            return $this->db->table('sertificates')->insert($data);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function update(object $sertificate, object $request): bool | string
    {
        try {
            $data = $request->validated();

            return $this->db->table('sertificates')->where('id', $sertificate->id)->update($data);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function delete(object $sertificate): bool | string
    {
        try {
            return $this->db->table('sertificates')->where('id', $sertificate->id)->delete();
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}