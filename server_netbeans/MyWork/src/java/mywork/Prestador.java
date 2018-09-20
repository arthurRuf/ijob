/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mywork;

import java.util.List;
/**
 *
 * @author 3823792
 */
public class Prestador extends Pessoa {
    private String nomeEmpresa;
    private Area area;
    private List<Especialidade> especialidades;
    private List<Servico> historico;

    public Area getArea() {
        return area;
    }

    public void setArea(Area area) {
        this.area = area;
    }

    public List<Especialidade> getEspecialidades() {
        return especialidades;
    }

    public void setEspecialidades(List<Especialidade> especialidades) {
        this.especialidades = especialidades;
    }

    public List<Servico> getHistorico() {
        return historico;
    }

    public void setHistorico(List<Servico> historico) {
        this.historico = historico;
    }

    @Override
    public Mensagem getMsgs() {
        return super.getMsgs(); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void setMsgs(Mensagem msgs) {
        super.setMsgs(msgs); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Avaliacao> getAvaliacoes() {
        return super.getAvaliacoes(); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void setAvaliacoes(List<Avaliacao> avaliacoes) {
        super.setAvaliacoes(avaliacoes); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String getEmail() {
        return super.getEmail(); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void setEmail(String email) {
        super.setEmail(email); //To change body of generated methods, choose Tools | Templates.
    }
    
    
    @Override
    public String getNome() {
        return super.getNome(); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void setNome(String nome) {
        super.setNome(nome); //To change body of generated methods, choose Tools | Templates.
    }

    public String getNomeEmpresa() {
        return nomeEmpresa;
    }

    public void setNomeEmpresa(String nomeEmpresa) {
        this.nomeEmpresa = nomeEmpresa;
    }

    @Override
    public float getPontuacao() {
        return super.getPontuacao(); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void setPontuacao(float pontuacao) {
        super.setPontuacao(pontuacao); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String getSenha() {
        return super.getSenha(); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public void setSenha(String senha) {
        super.setSenha(senha); //To change body of generated methods, choose Tools | Templates.
    }
    
    public Servico encerrarServico() {
        return null;
    }
    
    public Servico avaliarCliente() {
        return null;
    }
}
