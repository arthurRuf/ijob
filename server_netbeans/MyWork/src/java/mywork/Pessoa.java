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
public class Pessoa {
    private String nome, email, senha;
    private List<Avaliacao> avaliacoes;
    private float pontuacao;
    private Mensagem msgs;


    public List<Avaliacao> getAvaliacoes() {
        return avaliacoes;
    }

    public void setAvaliacoes(List<Avaliacao> avaliacoes) {
        this.avaliacoes = avaliacoes;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Mensagem getMsgs() {
        return msgs;
    }

    public void setMsgs(Mensagem msgs) {
        this.msgs = msgs;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public float getPontuacao() {
        return pontuacao;
    }

    public void setPontuacao(float pontuacao) {
        this.pontuacao = pontuacao;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public float somaPontuacao() {
        return 0;
    }
    
    public Mensagem mandarMsg() {
        return null;
    }
    
    public Mensagem excluirMsg(Mensagem msg) {
        return null;
    }
    
}
