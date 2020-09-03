# defmodule ShowcaseServerWeb.WordCountControllerTest do
#   use ShowcaseServerWeb.ConnCase

#   alias ShowcaseServer.WordCounts
#   alias ShowcaseServer.WordCounts.WordCount

#   @create_attrs %{
#     sentence: "some sentence"
#   }
#   @update_attrs %{
#     sentence: "some updated sentence"
#   }
#   @invalid_attrs %{sentence: nil}

#   def fixture(:word_count) do
#     {:ok, word_count} = WordCounts.create_word_count(@create_attrs)
#     word_count
#   end

#   setup %{conn: conn} do
#     {:ok, conn: put_req_header(conn, "accept", "application/json")}
#   end

#   describe "index" do
#     test "lists all word_count", %{conn: conn} do
#       conn = get(conn, Routes.word_count_path(conn, :index))
#       assert json_response(conn, 200)["data"] == []
#     end
#   end
# end
