@extends('layouts.default')

@section('content')

    <h1>Buy For $10</h1>

    <!-- Form To process payments -->

    {!! Form::open(['id' => 'billing-form']) !!}

    <!--Card number Form Input -->
    <div class="form-group">
        <div class="form-inline">
            {!! Form::label('cardNumber', 'Card number:') !!}
            {!! Form::text( null, null, ['data-stripe' => 'number','class' => 'form-control']) !!}
        </div>
    </div>
    <!--Cvc Form Input -->
    <div class="form-group">
        <div class="form-inline">
            {!! Form::label('cvc', 'CVC:') !!}
            {!! Form::text( null, null, ['data-stripe' => 'cvc','class' => 'form-control']) !!}
        </div>
    </div>
    <!-- Expiration Date Form Input -->
    <div class="form-group">
        <div class="form-inline">
            {!! Form::label('expiration', ' Expiration Date:') !!}
            {!! Form::selectMonth(null, null, ['data-stripe' => 'exp-month', 'class' => 'form-control']) !!}
            {!! Form::selectRange(null, date('Y'), date('Y')+15, null, ['data-stripe' => 'exp-year','class' => 'form-control']) !!}
        </div>
    </div>
    <!--Email Address Form Input -->
    <div class="form-group">
        <div class="form-inline">
        {!! Form::label('email', 'Email Address:') !!}
        {!! Form::email('email', null, ['class' => 'form-control']) !!}
            </div>
    </div>
    
    <!--Buy Now! Form Input -->
    <div class="form-group">
        {!! Form::submit('Buy Now!', ['class' => 'btn btn-primary form-control']) !!}
    </div>

    <div class="payment-errors"></div>


    {!! Form::close() !!}


@stop

@section('footer')
    <script type="text/javascript" src="/js/billing.js"></script>
@stop