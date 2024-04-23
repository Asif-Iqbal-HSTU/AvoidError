<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('users')->insert([
            [
                'name' => 'John Doe',
                'email' => 'john@example.com',
                'role' => 'admin',
                'password' => Hash::make('admin'),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Adiba Mahjabin Nitu',
                'email' => 'nitu.hstu@gmail.com',
                'role' => 'teacher',
                'password' => Hash::make('+8801716407820'),
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
    }
}
