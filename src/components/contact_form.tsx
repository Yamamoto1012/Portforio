export default function Contact_form() {
    return (
        <div className="pt-12 px-4">
            <h2 className="text-4xl">お問い合わせ</h2>
            <div className="pt-8"></div>
            <div className="flex justify-center">
                <form className="w-full max-w-xl">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2" htmlFor="grid-password">
                                お名前
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="お名前" />                                           
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2" htmlFor="grid-password">
                                フリガナ
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="お名前" />                                           
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2" htmlFor="grid-password">
                                メールアドレス
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="example@example.com" />                                           
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2" htmlFor="grid-password">
                                お問い合わせ内容
                            </label>
                            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="message" placeholder="お問い合わせ内容を入力してください"></textarea>                                           
                        </div>
                    </div>
                    <div className="flex justify-center pb-10">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            送信する
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
