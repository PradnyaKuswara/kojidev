<?php

namespace App\Http\Controllers;

use App\Interfaces\ArticleInterface;
use App\Interfaces\SertificateInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{

    private $articleInterface, $sertificateInterface;

    public function __construct(ArticleInterface $articleInterface, SertificateInterface $sertificateInterface)
    {
        $this->articleInterface = $articleInterface;
        $this->sertificateInterface = $sertificateInterface;
    }

    public function index()
    {
        $articles = $this->articleInterface->all();
        $sertificates = $this->sertificateInterface->all();

        return Inertia::render('HomePage', [
            'articles' => $articles,
            'sertificates' => $sertificates
        ]);
    }
}