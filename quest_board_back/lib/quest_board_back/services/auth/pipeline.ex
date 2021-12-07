defmodule QuestBoardBack.Service.Auth.Pipeline do
  use Guardian.Plug.Pipeline, otp_app: :quest_board_back,
    module: QuestBoardBack.Guardian,
    error_handler: QuestBoardBack.Auth.ErrorHandler

  plug Guardian.Plug.VerifyHeader
  plug Guardian.Plug.EnsureAuthenticated
  plug Guardian.Plug.LoadResource
end
