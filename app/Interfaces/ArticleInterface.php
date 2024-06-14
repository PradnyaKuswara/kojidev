<?php

namespace App\Interfaces;

interface ArticleInterface
{
    public function all();
    public function find($id);
    public function create($data);
    public function update($id, $request);
    public function delete($id);
}