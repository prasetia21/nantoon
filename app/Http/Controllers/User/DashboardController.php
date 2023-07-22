<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Movie;

class DashboardController extends Controller
{
    // controller api feature dashboard
    public function index()
    {

        $featuredMovies = Movie::whereIsFeatured(true)->get();
        $movies = movie::all();

        return inertia('User/Dashboard/Index', [
            'featuredMovies' => $featuredMovies,
            'movies' => $movies,
        ]);

        // cek data api json
        // return [
        //     'featuredMovies' => $featuredMovies,
        //     'movies' => $movies,
        // ];
    }
}
