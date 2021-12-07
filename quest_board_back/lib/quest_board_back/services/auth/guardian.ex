defmodule QuestBoardBack.Guardian do
  use Guardian, otp_app: :quest_board_back
  alias QuestBoardBack.Service.User.Get
  require Logger

  def subject_for_token(user, _claims) do
    {:ok, to_string(user.id)}
  end

  def resource_from_claims(claims) do
    id = claims["sub"]
    resource = Get.byId(id)
    {:ok,  resource}
  end

  def authenticate(email, password) do
    user = Get.byEmail(email)
    if (user.found) do
      if(validate_password(password, user.user.password)) do
        %{:status => true, :data => create_token(user.user)}
      else
        %{:status => false, :info => "wrong password"}
      end
    else
      %{:status => false, :info => "user dont exist"}
    end
  end

  defp validate_password(password, encrypted_password) do
    Comeonin.Bcrypt.checkpw(password, encrypted_password)
  end

  defp create_token(user) do
    token = encode_and_sign(user)
    %{:access => elem(token, 1), :info => elem(token, 2)}

    # {:ok, token, _claims} = encode_and_sign(user.id)
    # {:ok, user, token}
  end

end
