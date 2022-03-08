import PageHeader from "../template/pageHeader";
export default (props) => {
    return (
        <div>
            <PageHeader name="AdotaPet" small="home" />
            <div className="row">
                <div className="col-md-12">
                    <p>
                        {" "}
                        O AdotaPet é um sistema de adoção de animais, que visa
                        ajudar pessoas a encontrarem animais para adoção.
                    </p>
                    <p>
                        {" "}
                        O sistema foi desenvolvido com o intuito de auxiliar
                        pessoas a encontrarem animais para adoção, e também
                        auxiliar animais a encontrarem novos donos.
                    </p>
                </div>
            </div>
        </div>
    );
};
