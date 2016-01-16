<?php namespace Billing;

use Exception;
use Stripe\Charge;
use Stripe\Customer;
use Stripe\Error;
use Stripe\Error\ApiConnection;
use Stripe\Error\Authentication;
use Stripe\Error\Base;
use Stripe\Error\Card;
use Stripe\Error\InvalidRequest;
use Stripe\Stripe;

class StripeBilling implements BillingInterface {

    public function __construct()
    {
        Stripe::setApiKey('sk_test_rEQc0WkyzdW8wS1FnNZxKvzc');
    }

    public function charge(array $data)
    {
        try {

            $customer = Customer::create([
               'card' => $data['token'],
                'email' => $data['email']
            ]);

            Charge::create([
                'customer' => $customer->id,
                'amount' => 1000, //$10
                'currency' => 'eur',

            ]);

            return $customer->id;
        }

        /*catch(Card $e) {
        dd('card was declined');
        }
*/
        catch(Card $e) {
            // Since it's a decline, \Stripe\Error\Card will be caught
            throw new Exception($e->getMessage());

        } catch (InvalidRequest $e) {
            // Invalid parameters were supplied to Stripe's API
            throw new Exception($e->getMessage());
        } catch (Authentication $e) {
            // Authentication with Stripe's API failed
            // (maybe you changed API keys recently)
        } catch (ApiConnection $e) {
            // Network communication with Stripe failed
        } catch (Base $e) {
            // Display a very generic error to the user, and maybe send
            // yourself an email
        }

    }
}