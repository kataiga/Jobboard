defmodule QuestBoardBackWeb.Router do
  use QuestBoardBackWeb, :router
  alias QuestBoardBackWeb.Routes
  use Plug.ErrorHandler

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, {QuestBoardBackWeb.LayoutView, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :auth do
    plug QuestBoardBack.Service.Auth.Pipeline
  end

  pipeline :isAdmin do
    plug QuestBoardBack.Plug.StaffOnly
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  #and implement the callback handle_errors/2
  defp handle_errors(conn, %{reason: %Phoenix.Router.NoRouteError{message: message}}) do
    conn |> json(%{error: message}) |> halt()
  end

  defp handle_errors(conn, _) do
    conn |> json(%{error: "unknown"}) |> halt()
  end

  # Other scopes may use custom stacks.

  scope Routes.scope(:root), QuestBoardBackWeb do
    pipe_through :api
  end

  scope Routes.scope(:auth), QuestBoardBackWeb do
    post Routes.route(:register), AuthController, :register
    post Routes.route(:login), AuthController, :login
  end

  scope Routes.scope(:restricted), QuestBoardBackWeb do
    pipe_through [:api, :auth]
    post Routes.route(:test), TestController, :index
  end

  scope Routes.scope(:staffOnly), QuestBoardBackWeb do
    pipe_through [:browser, :isAdmin]
    get Routes.route(:backoffice), BackofficeControler, :index
  end

  scope Routes.scope(:create), QuestBoardBackWeb do
    post Routes.route(:jobOffer), JobOfferControler, :create
    post Routes.route(:company), CompanyControler, :create
    post Routes.route(:applyUtils), ApplyUtilsControler, :create
    post Routes.route(:apply), ApplyControler, :create
  end

  scope Routes.scope(:read), QuestBoardBackWeb do
    post Routes.route(:jobOffer), JobOfferControler, :read
    post Routes.route(:company), CompanyControler, :read
    post Routes.route(:applyUtils), ApplyUtilsControler, :read
    post Routes.route(:apply), ApplyControler, :read
  end

  scope Routes.scope(:delete), QuestBoardBackWeb do
    post Routes.route(:jobOffer), JobOfferControler, :delete
    post Routes.route(:company), CompanyControler, :delete
    post Routes.route(:applyUtils), ApplyUtilsControler, :delete
    post Routes.route(:apply), ApplyControler, :delete
  end

  scope Routes.scope(:update), QuestBoardBackWeb do
    post Routes.route(:jobOffer), JobOfferControler, :update
    post Routes.route(:company), CompanyControler, :update
    post Routes.route(:applyUtils), ApplyUtilsControler, :update
    post Routes.route(:apply), ApplyControler, :update
  end

  scope Routes.scope(:user), QuestBoardBackWeb do
    post Routes.route(:get), UserController, :get
  end

  scope Routes.scope(:get), QuestBoardBackWeb do
    post Routes.route(:applyUtils), ApplyUtilsControler, :get
  end


  # Enables LiveDashboard only for development
  #
  # If you want to use the LiveDashboard in production, you should put
  # it behind authentication and allow only admins to access it.
  # If your application does not have an admins-only section yet,
  # you can use Plug.BasicAuth to set up some basic authentication
  # as long as you are also using SSL (which you should anyway).
  # i pooped on your laptop sorry ..

  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through :browser
      live_dashboard "/dashboard", metrics: QuestBoardBackWeb.Telemetry, ecto_repos: [QuestBoardBack.Repo]
    end
  end
end
