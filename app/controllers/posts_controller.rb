class PostsController < ApplicationController

  def index
    respond_with Post.all
  end

  def create
    respond_with Post.create(permitted_params)
  end

  def show
    respond_with Post.find(params[:id])
  end

  def upvote
    post = Post.find(params[:id])
    post.increment!(:upvotes)

    respond_with post
  end

  private

  def permitted_params
    params.require(:post).permit(:link, :title)
  end

end