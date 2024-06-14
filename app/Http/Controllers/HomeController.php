<?php

namespace App\Http\Controllers;

use App\Interfaces\ArticleInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{

    private $articleInterface;

    public function __construct(ArticleInterface $articleInterface)
    {
        $this->articleInterface = $articleInterface;
    }

    public function index()
    {
        $articles = $this->articleInterface->all();

        return Inertia::render('HomePage', [
            'articles' => $articles
        ]);
    }
}
