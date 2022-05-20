<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PodcastResource;
use Illuminate\Support\Facades\Http;
use function env;

class PodcastController extends Controller
{
    public function __invoke()
    {
        $uri = env("JSON_BIN_ACCESS_PUBLIC_URL");

        // Here we could use Http::withHeaders - But the service is not working so far

        return Http::get($uri)->json();

        // return PodcastResource::collection(Http::get($uri)->json());
    }
}
