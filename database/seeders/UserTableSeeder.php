<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // buat user admin
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'nontoon@test.com',
            'password' => bcrypt('password'),
        ]);
        $admin->assignRole('admin');
    }
}
