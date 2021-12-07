defmodule QuestBoardBackWeb.Routes do
    def route(atom) do
        routes = %{
            :index => "/",

            :register => "/register",
            :login => "/login",

            :backoffice => "/backoffice",

            :jobOffer => "/jobOffer",
            :company => "/company",
            :applyUtils => "/applyUtils",
            :apply => "/apply",

            :test => "/test",

            :get => "/get"
        }

        routes[atom]
    end

    def scope(atom) do
        scopes = %{
            :root => "/api",
            :auth => "/api/auth",
            :restricted => "/api/restricted",
            :staffOnly => "/api/staffOnly",
            :create => "/api/create",
            :read => "/api/read",
            :update => "/api/update",
            :delete => "/api/delete",
            :user => "/api/user",
            :get => "api/get"
        }
        scopes[atom]
    end

end
