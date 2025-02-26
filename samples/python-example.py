# モジュールレベルの
    # コメントは
  # このように揃います

"""モジュールの
    ドキュメント文字列は
  このように揃えられます
"""

class PythonExample:
    """クラスの
        ドキュメント文字列も
      このように揃えられます
    """

    def __init__(self):
        # コンストラクタ内の
          # コメントも
        # 揃います
        self.value = 0

    def example_method(self):
        """メソッドの
            ドキュメント文字列は
          このように揃えられます
        """

        # リスト操作の
          # コメントは
        # このように揃います
        my_list = [1, 2, 3]

        for item in my_list:
            # ループ内の
                # コメントも
              # 揃えられます
            pass

    async def async_method(self):
        '''非同期メソッドの
            ドキュメント文字列も
          このように揃えられます
        '''
        await self.some_coroutine()

    @property
    def some_property(self):
        """プロパティの
            ドキュメント文字列も
          きれいに揃います
        """
        return self.value

# 関数定義の
    # コメントは
  # このように揃えられます
def global_function():
    """関数の
        ドキュメント文字列は
      このように揃えられます
    """
    # 関数内の
        # コメントも
      # 揃います
    pass

if __name__ == "__main__":
    # メインブロックの
        # コメントも
      # 揃えられます
    example = PythonExample()
