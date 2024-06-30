<?php

namespace App\Interfaces;

interface PortfolioInterface
{
    public function all();
    public function find(object $portfolio);
    public function create(array $data);
    public function update(object $portfolio, object $request);
    public function delete(object $portfolio);
}
