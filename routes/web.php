<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Middleware\VerifyCsrfToken;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::controller(HomeController::class)->group(function () {
    Route::get('/', 'index')->name('index');
});

Route::controller(LoginController::class)->group(function () {
    Route::get('/login', 'index')->name('login');
    Route::post('/login', 'store')->name('login.store');
    Route::post('/logout', 'destroy')->name('logout');
});

Route::prefix('admin')->name('admin.')->middleware('auth')->group(function () {
    Route::controller(DashboardController::class)->group(function () {
        Route::get('/main-dashboard', 'index')->name('dashboard');
    });

    Route::controller(ArticleController::class)->prefix('articles')->name('articles.')->group(function () {
        Route::get('/articles', 'index')->name('index');
        Route::get('/articles/create', 'create')->name('create');
        Route::get('/articles/{article}', 'edit')->name('edit');
        Route::post('/articles', 'store')->name('store');
        Route::patch('/articles/{article}', 'update')->name('update');
        Route::delete('/articles/{article}', 'destroy')->name('destroy');
        Route::get('/articles/show/{article}', 'show')->name('show');
    });
});