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
        Schema::create('sertificates', function (Blueprint $table) {
            $table->id();
            $table->uuid()->unique();


            $table->string('name');
            $table->string('organization');
            $table->string('month_obtained');
            $table->string('year_obtained');
            $table->string('month_expired')->nullable();
            $table->string('year_expired')->nullable();
            $table->string('url')->nullable();
            $table->longText('description')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sertificates');
    }
};