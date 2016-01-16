<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|

*/


use App\User;

Route::get('/home', 'HomeController@index');


Route::get('/', 'WelcomeController@index');

//Route::get('home', 'HomeController@index');

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
]);



Route::get('buy', function(){
   return View::make('buy');
});
Route::post('buy', function(){

    $billing = App::make('Billing\BillingInterface');

    try
    {

    $customerId = $billing->charge([
        'email' => Input::get('email'),
        'token' => Input::get('stripe-token')
    ]);

    $user = User::first();
    $user->billing_id = $customerId;
    $user->save();

    //flash()->success('', 'Apmoketa!');
    }
    catch (Exception $e)
    {

        return redirect()->back()->withFlashMessage($e->getMessage());
    }

});

