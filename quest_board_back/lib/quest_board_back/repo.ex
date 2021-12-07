defmodule QuestBoardBack.Repo do
  use Ecto.Repo,
    otp_app: :quest_board_back,
    adapter: Ecto.Adapters.Postgres
end
