<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PortfolioRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'image' => [Rule::when($this->conditionalImageUpdate(), '', ['required']), Rule::when($this->hasImage(), [Rule::file()->image()->max(1024 * 5), 'mimes:jpg,jpeg,png'], '')],
            'slug' => ['string', 'unique:articles,slug'],
            'description' => ['required', 'string'],
            'project_category' => ['required', 'string', 'max:255'],
            'project_client' => ['required', 'string', 'max:255'],
            'project_date' => ['required', 'date', 'max:255'],
            'project_url' => ['required', 'url', 'max:255'],
            'project_url_github' => ['required', 'url', 'max:255'],
        ];
    }

    private function conditionalImageUpdate(): bool
    {
        return $this->isMethod('patch') or $this->isMethod('put');
    }

    private function hasImage(): bool
    {
        return $this->hasFile('image');
    }
}