<?php

namespace App\Http\Controllers;

use App\Http\Requests\ArticleRequest;
use App\Interfaces\ArticleInterface;
use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Psr\Container\ContainerInterface;

class ArticleController extends Controller
{
    private $articleInterface;
    public function __construct(ArticleInterface $articleInterface)
    {
        $this->articleInterface = $articleInterface;
    }

    public function index(): Response
    {
        $articles = $this->articleInterface->all();

        return Inertia::render('Admin/Articles/Index', [
            'articles' => $articles
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Articles/Create');
    }

    public function store(ArticleRequest $request)
    {
        $this->articleInterface->create($request->validated());

        return redirect()->route('admin.articles.index');
    }

    public function edit(Article $article): Response
    {
        return Inertia::render('Admin/Articles/Edit', [
            'article' => $article
        ]);
    }

    public function update(ArticleRequest $request, Article $article)
    {
        $this->articleInterface->update($article, $request);

        return redirect()->route('admin.articles.index');
    }

    public function destroy(Article $article)
    {
        $this->articleInterface->delete($article);

        return redirect()->route('admin.articles.index');
    }

    public function show(Article $article): Response
    {
        return Inertia::render('Admin/Articles/Show', [
            'article' => $article
        ]);
    }
}