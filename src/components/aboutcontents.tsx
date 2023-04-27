export default function Aboutcontents() {
    return (
    <div className="p-8">
        <h1 className="text-3xl font-bold">自己紹介</h1>
        <div className="mt-8">
            <h2 className="text-2xl font-bold">略歴</h2>
            <ul className="list-disc list-inside mt-4 text-xl">
                <li>2022年4月 金沢工業大学情報工学科に入学</li>
                <li>2022年5月 株式会社Cirkit(学生プロジェクト)のインターン生として活動開始</li>
                <li>2022年12月 DMMハッカソンに参加</li>
            </ul>
        </div>
        <div className="mt-8">
            <h2 className="text-2xl font-bold">プロフィール</h2>
            <p className="mt-4 text-xl">
            私はWebアプリケーション開発を専門としており、主にフロントエンドの開発を行っています。
            ReactやVue.jsなどのJavaScriptフレームワークを用いた開発を得意としており、
            最近はTypeScriptにも興味を持って勉強中です。
            </p>
            <p className="mt-4 text-xl">
            趣味は映画鑑賞と旅行です。特に、海外の映画祭に参加することが好きで、
            映画祭の期間中は毎日映画を見るのが恒例になっています。
            また、海外旅行に行く際は、必ず現地の食べ物を試すことを心がけています。
            </p>
        </div>
    </div>
    )
}