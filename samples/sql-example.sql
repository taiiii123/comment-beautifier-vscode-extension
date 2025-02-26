-- SQLのコメントは
    -- このように
  -- 揃えられます

/* 複数行コメントも
 * このように
   * 揃えられます
 */

-- データベース作成の
    -- コメントは
  -- このように揃います
CREATE DATABASE example_db;

/* テーブル作成の
 * コメントも
   * このように
 * 揃えられます
 */
CREATE TABLE users (
    -- 主キーの
        -- コメントは
      -- このように揃います
    id INTEGER PRIMARY KEY AUTOINCREMENT,

    -- カラム定義の
        -- コメントも
      -- 揃えられます
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- インデックス作成の
    -- コメントは
  -- このように揃います
CREATE INDEX idx_users_email ON users(email);

/* データ挿入の
 * コメントも
   * このように
 * 揃えられます
 */
INSERT INTO users (name, email) VALUES
    -- 値の
        -- コメントは
      -- このように揃います
    ('山田太郎', 'yamada@example.com'),
    ('鈴木花子', 'suzuki@example.com');

-- SELECT文の
    -- コメントは
  -- このように揃います
SELECT
    -- カラム選択の
        -- コメントも
      -- 揃えられます
    u.id,
    u.name,
    u.email
FROM
    -- テーブル結合の
        -- コメントは
      -- このように揃います
    users u
    LEFT JOIN orders o ON u.id = o.user_id
WHERE
    -- 条件式の
        -- コメントも
      -- 揃えられます
    u.created_at >= '2024-01-01'
    AND u.email LIKE '%@example.com'
GROUP BY
    -- グループ化の
        -- コメントは
      -- このように揃います
    u.id,
    u.name
HAVING
    -- 集計条件の
        -- コメントも
      -- 揃えられます
    COUNT(o.id) > 0
ORDER BY
    -- ソート条件の
        -- コメントは
      -- このように揃います
    u.name ASC;

/* ストアドプロシージャの
 * コメントも
   * このように
 * 揃えられます
 */
CREATE PROCEDURE process_user(
    -- パラメータの
        -- コメントは
      -- このように揃います
    IN user_id INTEGER
)
BEGIN
    -- プロシージャ内の
        -- コメントも
      -- 揃えられます
    DECLARE total_orders INTEGER;

    -- カーソルの
        -- コメントは
      -- このように揃います
    DECLARE order_cursor CURSOR FOR
        SELECT COUNT(*) FROM orders WHERE user_id = user_id;

    -- エラーハンドリングの
        -- コメントも
      -- 揃えられます
    DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
    BEGIN
        -- エラー処理の
            -- コメントは
          -- このように揃います
        ROLLBACK;
    END;
END;

-- トリガーの
    -- コメントは
  -- このように揃います
CREATE TRIGGER after_user_insert
AFTER INSERT ON users
FOR EACH ROW
BEGIN
    -- トリガー処理の
        -- コメントも
      -- 揃えられます
    INSERT INTO audit_log (action, table_name, record_id)
    VALUES ('INSERT', 'users', NEW.id);
END;

/* トランザクションの
 * コメントも
   * このように
 * 揃えられます
 */
BEGIN TRANSACTION;
    -- トランザクション処理の
        -- コメントは
      -- このように揃います
    UPDATE users SET name = '新しい名前' WHERE id = 1;

    -- ロールバックポイントの
        -- コメントも
      -- 揃えられます
    SAVEPOINT update_point;
COMMIT;
