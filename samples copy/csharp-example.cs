using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CommentBeautifierTest
{
    /// <summary>
    /// サンプルクラスのコメント
    /// </summary>
    public class SampleClass
    {
        // フィールドの
            // コメントは
          // このように揃います
        private readonly List<int> _numbers = new();

        /// <summary>
        /// メインメソッドのコメント
        /// </summary>
        public static void Main(string[] args)
        {
            // メインメソッド内の
              // コメントも
            // 揃えられます
            Console.WriteLine("C# Comment Beautifier Test");

            var sample = new SampleClass();
            sample.Run();
        }

        /// <summary>
        /// 実行メソッドのコメント
        /// </summary>
        public void Run()
        {
            // メソッド内の
              // コメントも
            // 揃えられます
            _numbers.Add(1);  // 数値を追加
            _numbers.Add(2);      // 数値を追加
            _numbers.Add(3);   // 数値を追加

            foreach (var number in _numbers)
            {
                // foreach内の
                    // コメントも
                  // 揃います
                Console.WriteLine($"Number: {number}");
            }
        }

        /// <summary>
        /// 非同期処理のコメント
        /// </summary>
        public async Task ProcessDataAsync()
        {
            // 非同期メソッドの
              // コメントも
            // 揃えられます
            await Task.Delay(1000);  // 1秒待機
        }

        /// <summary>
        /// ジェネリックメソッドのコメント
        /// </summary>
        public T GenericMethod<T>(T input) where T : class
        {
            // ジェネリックメソッド内の
              // コメントも
            // 揃います
            return input;
        }
    }
}
