<?php

namespace App\Interfaces;

interface SertificateInterface
{
    public function all();
    public function find(object $sertificate);
    public function create(array $data);
    public function update(object $sertificate, object $request);
    public function delete(object $sertificate);
}