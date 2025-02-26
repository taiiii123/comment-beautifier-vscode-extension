// 名前空間の
    // コメントは
  // このように揃います
namespace Example;

/* インターフェースの
 * コメントも
   * このように
 * 揃えられます
 */
public interface IExampleInterface
{
    void DoSomething();
}

// 属性の
    // コメントも
  // 揃えられます
[Serializable]
public class CSharpExample : IExampleInterface
{
    // プロパティの
        // コメントは
      // このように揃います
    public string Name { get; set; }

    /* プライベートフィールドの
     * コメントも
       * このように
     * 揃えられます
     */
    private readonly List<int> _items = new();

    // コンストラクタの
        // コメントは
      // このように揃います
    public CSharpExample()
    {
        // コンストラクタ内の
          // コメントも
        // 揃えられます
    }

    /// <summary>
    /// XMLドキュメントコメントは
    /// このように書きます
    /// </summary>
    public void DoSomething()
    {
        // メソッド内の
          // コメントも
        // 揃えられます

        foreach (var item in _items)
        {
            // foreach内の
                // コメントも
              // 揃います
        }
    }

    // 非同期メソッドの
        // コメントは
      // このように揃います
    public async Task ProcessDataAsync()
    {
        // 非同期処理の
          // コメントも
        // 揃えられます
        await Task.Delay(1000);
    }

    /* ジェネリックメソッドの
     * コメントも
       * このように
     * 揃えられます
     */
    public T GenericMethod<T>(T input) where T : class
    {
        // ジェネリックメソッド内の
          // コメントも
        // 揃います
        return input;
    }

    // イベントの
        // コメントは
      // このように揃います
    public event EventHandler? OnSomething;

    // 列挙型の
        // コメントも
      // 揃えられます
    private enum ExampleEnum
    {
        // 列挙値の
          // コメントも
        // 揃います
        First,
        Second,
        Third
    }
}
