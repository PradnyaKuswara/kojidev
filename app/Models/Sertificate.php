<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sertificate extends Model
{
    use HasFactory;

    protected $fillable = [
        'uuid',
        'name',
        'organization',
        'month_obtained',
        'year_obtained',
        'month_expired',
        'year_expired',
        'url',
        'description'
    ];

    public function getRouteKeyName(): string
    {
        return 'uuid';
    }
}