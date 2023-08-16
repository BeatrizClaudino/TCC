import Header from "../componentes/topo";
import seta from "../assets/seta.png"
import boneco from "../assets/bonecoHome.png"
import TopicosHome from "../componentes/topicosHome";
import automatizacaoIcon from "../assets/automatizacao.png";
import atualizacaoIcon from "../assets/atualizacao.png";
import dinamicoIcon from "../assets/dinamico.png";

const Home: React.FC = () => {
    return (
        <div className="w-full h-[100vh]">
            <Header />
            <div className="flex items-center justify-center flex-col w-full">
                <div className="flex w-[80%] flex-col text-justify pt-9">
                    <label className="font-semibold text-transparent text-[40px] bg-clip-text bg-gradient-to-r from-[#004290] from-10% via-[#4D3E8F] via-30% to-[#CE44D1]">Corporate wiki</label>
                    <label className="mt-6 text-[#767676]">Todas as informações do seu Corporate concentradas em um único só lugar, projetado para atender às necessidades específicas sobre o seu Corporate.</label>
                    <div className="w-full pt-8">
                        <button className=" flex items-center justify-center space-x-2 w-[221px] h-[54px] bg-[#4D3E8F] rounded-lg text-white">
                            <span>Documentação</span>
                            <img src={seta} alt="seta que complementa o layout do botão" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="pt-14 w-full flex items-center justify-center">
                <img src={boneco} alt="" />
            </div>
            <div className="flex items-center justify-center flex-col w-full">
                <div className="flex w-[80%] flex-col text-justify pt-9">
                    <label className="font-semibold text-transparent text-[40px] bg-clip-text bg-gradient-to-r from-[#004290] from-10% via-[#4D3E8F] via-30% to-[#CE44D1]">Corporate wiki</label>
                    <label className="mt-6 text-[#767676]">Uma plataforma interativa que concentra todas as informações do cartão Corporate em um único local. Além de oferecer treinamentos e um sistema de chatbot.</label>
                    <div className="w-full pt-8">
                    </div>
                </div>
            </div>
            <TopicosHome texto="Automatização de processos" imagemSrc={automatizacaoIcon} altText="imagem que representa automação de processos"/>
            <TopicosHome texto="Informações atualizadas" imagemSrc={atualizacaoIcon} altText="imagem que representa automação de processos"/>
            <TopicosHome texto="Dinâmico e de fácil acesso " imagemSrc={dinamicoIcon} altText="imagem que representa automação de processos"/>
        </div>
    );
}

export default Home;