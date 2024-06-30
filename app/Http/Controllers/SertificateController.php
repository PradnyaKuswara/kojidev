<?php

namespace App\Http\Controllers;

use App\Http\Requests\SertificateRequest;
use App\Interfaces\SertificateInterface;
use App\Models\Sertificate;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SertificateController extends Controller
{
    private $sertificateInterface;

    public function __construct(SertificateInterface $sertificateInterface)
    {
        $this->sertificateInterface = $sertificateInterface;
    }

    public function index(): Response
    {
        $sertificates = $this->sertificateInterface->all();
        return Inertia::render('Admin/Sertificates/Index', [
            'sertificates' => $sertificates
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Sertificates/Create');
    }

    public function store(SertificateRequest $request): RedirectResponse
    {
        $this->sertificateInterface->create($request->validated());
        return redirect()->route('admin.sertificates.index');
    }

    public function edit(Sertificate $sertificate): Response
    {
        return Inertia::render('Admin/Sertificates/Edit', [
            'sertificate' => $sertificate
        ]);
    }

    public function update(SertificateRequest $request, Sertificate $sertificate): RedirectResponse
    {
        $this->sertificateInterface->update($sertificate, $request);
        return redirect()->route('admin.sertificates.index');
    }

    public function destroy(Sertificate $sertificate): RedirectResponse
    {
        $this->sertificateInterface->delete($sertificate);
        return redirect()->route('admin.sertificates.index');
    }
}