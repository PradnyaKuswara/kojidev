<?php

namespace App\Providers;

use App\Interfaces\ArticleInterface;
use App\Interfaces\PortfolioInterface;
use App\Interfaces\SertificateInterface;
use App\Repositories\ArticleRepository;
use App\Repositories\PortfolioRepository;
use App\Repositories\SertificateRepository;
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
        $this->app->bind(PortfolioInterface::class, PortfolioRepository::class);
        $this->app->bind(SertificateInterface::class, SertificateRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}