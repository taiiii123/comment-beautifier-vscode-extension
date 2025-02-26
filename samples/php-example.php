<?php

// 名前空間の
    // コメントは
  // このように揃います
namespace Example;

/* use文の
 * コメントも
   * このように
 * 揃えられます
 */
use DateTime;
use Exception;

/**
 * PHPDocコメントは
 * このように書きます
 */
interface ExampleInterface
{
    public function doSomething(): void;
}

# トレイトの
    # コメントは
  # このように揃います
trait ExampleTrait
{
    // トレイトのメソッドの
        // コメントも
      // 揃えられます
    public function traitMethod(): string
    {
        return 'trait';
    }
}

class PhpExample implements ExampleInterface
{
    // トレイトの使用の
        // コメントは
      // このように揃います
    use ExampleTrait;

    /* プロパティの
     * コメントも
       * このように
     * 揃えられます
     */
    private string $name;
    private array $items = [];

    # コンストラクタの
        # コメントは
      # このように揃います
    public function __construct()
    {
        // コンストラクタ内の
          // コメントも
        // 揃えられます
    }

    /**
     * PHPDocブロックは
     * 型情報なども含めます
     * @return void
     */
    public function doSomething(): void
    {
        // メソッド内の
          // コメントも
        // 揃えられます

        foreach ($this->items as $item) {
            // foreach内の
                // コメントも
              // 揃います
        }
    }

    /* プライベートメソッドの
     * コメントも
       * このように
     * 揃えられます
     */
    private function helperMethod(): void
    {
        try {
            // try-catch内の
                // コメントも
              // 揃えられます
        } catch (Exception $e) {
            # 例外処理の
                # コメントも
              # 揃います
        }
    }

    // 静的メソッドの
        // コメントは
      // このように揃います
    public static function staticMethod(): self
    {
        // 静的メソッド内の
          // コメントも
        // 揃えられます
        return new self();
    }
}

// グローバル関数の
    // コメントは
  # このように揃います
function globalFunction(): void
{
    /* 関数内の
     * コメントも
       * このように
     * 揃えられます
     */
}
