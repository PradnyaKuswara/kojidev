<?php

namespace App\Models;

use App\Traits\Slugable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    use HasFactory;

    const IMAGE_PATH = 'portfolios';

    protected $fillable = [
        'uuid',
        'title',
        'image',
        'slug',
        'description',
        'project_category',
        'project_client',
        'project_date',
        'project_url',
        'project_url_github',
    ];

    protected $casts = [
        'project_date' => 'date',
    ];

    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}