<?php

namespace App\Interfaces;

interface ArticleInterface
{
    public function all();
    public function find(object $article);
    public function create(array $data);
    public function update(object $article, object $request);
    public function delete(object $article);
}