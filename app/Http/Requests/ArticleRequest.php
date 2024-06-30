<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ArticleRequest extends FormRequest
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
            'content' => ['required', 'string'],
            'thumbnail' => [Rule::when($this->conditionalImageUpdate(), '', ['required']), Rule::when($this->hasThumbnail(), [Rule::file()->image()->max(1024 * 5), 'mimes:jpg,jpeg,png'], '')],
            'slug' => ['string', 'unique:articles,slug'],
        ];
    }

    private function conditionalImageUpdate(): bool
    {
        return $this->isMethod('patch') or $this->isMethod('put');
    }

    private function hasThumbnail(): bool
    {
        return $this->hasFile('thumbnail');
    }
}