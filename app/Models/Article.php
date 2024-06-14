<?php

namespace App\Models;

use App\Traits\Slugable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Article extends Model
{
    use HasFactory, Slugable;

    const IMAGE_PATH = 'articles';

    protected $fillable = [
        'title',
        'thumbnail',
        'slug',
        'content',
    ];

    public function thumbnail(): String
    {
        return Storage::url($this->thumbnail);
    }
}