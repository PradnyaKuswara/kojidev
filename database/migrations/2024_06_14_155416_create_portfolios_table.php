<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('portfolios', function (Blueprint $table) {
            $table->id();
            $table->uuid()->unique();

            $table->string('title');
            $table->text('image');
            $table->text('slug');
            $table->longText('description');
            $table->string('project_category');
            $table->string('project_client')->nullable();
            $table->date('project_date');
            $table->string('project_url')->nullable();
            $table->string('project_url_github')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('portfolios');
    }
};