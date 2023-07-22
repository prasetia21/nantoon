<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use Auth;
use Carbon\Carbon;


class SubscriptionPlanController extends Controller
{

    public function index()
    {
        // check response json / api
        $subscriptionPlans = SubscriptionPlan::all();
        // return $subscriptionPlans;

        return inertia('User/Dashboard/SubscriptionPlan/Index', [
            'subscriptionPlans' => SubscriptionPlan::all(),
            
        ]);
    }

    public function userSubscribe(Request $request, SubscriptionPlan $subscriptionPlan)
    {
        // test
        // return $subscriptionPlan;

        $data = [
            'user_id' => Auth::id(),
            'subscription_plan_id' => $subscriptionPlan->id,
            'price' => $subscriptionPlan->price,
            'expired_date' => Carbon::now()->addMonths($subscriptionPlan->active_period_in_months),
            'payment_status' => 'paid',
        ];
        // test
        // return $data;
        $userSubscription = UserSubscription::create($data);

        return redirect(route('user.dashboard.index'));

        
    }

}
