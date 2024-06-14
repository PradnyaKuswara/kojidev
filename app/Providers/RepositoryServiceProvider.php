<?php

namespace App\Providers;

use App\Interfaces\ArticleInterface;
use App\Repositories\ArticleRepository;
use Illuminate\Database\DatabaseManager;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(ArticleInterface::class, ArticleRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}