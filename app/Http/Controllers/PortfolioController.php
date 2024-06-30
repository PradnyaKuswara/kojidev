<?php

namespace App\Http\Controllers;

use App\Http\Requests\PortfolioRequest;
use App\Interfaces\PortfolioInterface;
use App\Models\Portfolio;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PortfolioController extends Controller
{
    private $portfolioInterface;

    public function __construct(PortfolioInterface $portfolioInterface)
    {
        $this->portfolioInterface = $portfolioInterface;
    }

    public function index(): Response
    {
        $portfolios = $this->portfolioInterface->all();

        return Inertia::render('Admin/Portfolios/Index', [
            'portfolios' => $portfolios
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Portfolios/Create');
    }

    public function store(PortfolioRequest $request): RedirectResponse
    {
        $this->portfolioInterface->create($request->validated());

        return redirect()->route('admin.portfolios.index');
    }

    public function edit(Portfolio $portfolio): Response
    {
        return Inertia::render('Admin/Portfolios/Edit', [
            'portfolio' => $portfolio
        ]);
    }

    public function update(PortfolioRequest $request, Portfolio $portfolio): RedirectResponse
    {
        $this->portfolioInterface->update($portfolio, $request);

        return redirect()->route('admin.portfolios.index');
    }

    public function destroy(Portfolio $portfolio): RedirectResponse
    {
        $this->portfolioInterface->delete($portfolio);

        return redirect()->route('admin.portfolios.index');
    }
}