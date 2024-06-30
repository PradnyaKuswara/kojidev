<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SertificateRequest extends FormRequest
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
            'name' => ['required', 'string', 'max:255'],
            'organization' => ['required', 'string', 'max:255'],
            'month_obtained' => ['required', 'string', 'max:255'],
            'year_obtained' => ['required', 'string', 'max:255'],
            'month_expired' => ['required', 'string', 'max:255'],
            'year_expired' => ['required', 'string', 'max:255'],
            'url' => ['required', 'string', 'url', 'max:255'],
            'description' => ['required', 'string']
        ];
    }
}