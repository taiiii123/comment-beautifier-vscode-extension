# モジュールの
    # コメントは
  # このように揃います
module Example
  # 定数の
      # コメントも
    # 揃えられます
  MAX_SIZE = 100

=begin
モジュールの
    複数行コメントは
  このように揃えられます
=end

  # モジュール関数の
      # コメントは
    # このように揃います
  module_function
  def helper_method
    # モジュール関数内の
        # コメントも
      # 揃えられます

=begin
    メソッド内の
        複数行コメントも
      このように揃えられます
=end

    result = process_data
  end
end

=begin
クラスの
複数行コメントは
このように
書きます
=end
class RubyExample
  # Mixinの
      # コメントは
    # このように揃います
  include Example

=begin
  クラス内の
      複数行コメントは
    このように揃えられます
=end

  # アクセサの
      # コメントも
    # 揃えられます
  attr_reader :name
  attr_accessor :value

  # クラスメソッドの
      # コメントは
    # このように揃います
  class << self
    # クラスメソッド内の
        # コメントも
      # 揃えられます
    def factory
      new
    end
  end

  # イニシャライザの
      # コメントは
    # このように揃います
  def initialize
    # 初期化時の
        # コメントも
      # 揃えられます
    @name = "example"
    @value = 0

=begin
    初期化処理の
        詳細な説明は
      このように揃えられます
=end
  end

  # パブリックメソッドの
      # コメントは
    # このように揃います
  def example_method
    # メソッド内の
        # コメントも
      # 揃えられます

    array = [1, 2, 3]
    # 配列操作の
        # コメントも
      # 揃います

=begin
    配列処理の
        詳細な説明は
      このように揃えられます
=end

    array.each do |item|
      # ブロック内の
          # コメントも
        # 揃えられます
    end
  end

  # 例外処理の
      # コメントは
    # このように揃います
  def process_data
    begin
      # begin-rescue内の
          # コメントも
        # 揃えられます
    rescue StandardError => e
      # エラー処理の
          # コメントも
        # 揃います
    ensure
      # ensure節の
          # コメントも
        # 揃えられます
    end
  end

  private

  # プライベートメソッドの
      # コメントは
    # このように揃います
  def helper
    # プライベートメソッド内の
        # コメントも
      # 揃えられます
  end
end

=begin
スクリプト実行時の
    複数行コメントは
  このように揃えられます
=end

if __FILE__ == $PROGRAM_NAME
  # メインの処理の
      # コメントも
    # 揃えられます
  example = RubyExample.new
end
