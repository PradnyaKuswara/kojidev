<?php

namespace App\Models;

use App\Traits\Slugable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Article extends Model
{
    use HasFactory;

    const IMAGE_PATH = 'articles';

    protected $fillable = [
        'uuid',
        'title',
        'thumbnail',
        'slug',
        'content',
    ];

    public function thumbnail(): String
    {
        return Storage::url($this->thumbnail);
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}