---
name: "dequantization-ml"
title: "Practical Implications of Dequantization on Machine Learning Algorithms"
year: 2022
authors:
  - name: "Vinooth Kulkarni"
    slug: "vinooth-kulkarni"
  - name: "Daniel Chen"
  - name: "Shuai Xu"
  - name: "Qiang Guan"
  - name: "Vipin Chaudhary"
    slug: "vipin-chaudhary"

journal: ""
conference: "7th International Conference on Connected Systems and Intelligence (ISI'22), September 2022, Trivandrum, India"

# --- LINKS ---
doi: "10.1007/978-981-19-8094-7_3"
github: ""
arxiv: ""
openreview: ""
paper_page: ""

# --- CATEGORIZATION ---
research_areas:
  - "Quantum Computing"
  - "Artificial Intelligence"

# --- CONTENT ---
abstract: |
  Quantum computing algorithms offer theoretical speedups for certain machine learning tasks, but dequantization results show that classical algorithms can sometimes achieve comparable performance. This paper examines the practical implications of dequantization on machine learning algorithms, providing a systematic analysis of when quantum approaches offer genuine advantages versus when classical alternatives are sufficient. The work offers guidance for practitioners on determining which ML tasks are promising candidates for quantum speedup versus those where dequantization renders quantum approaches redundant.

bibtex: |
  @InProceedings{10.1007/978-981-19-8094-7_3,
  author="Kulkarni, Vinooth Rao
  and Chen, Daniel
  and Xu, Shuai
  and Guan, Qiang
  and Chaudhary, Vipin",
  editor="Thampi, Sabu M.
  and Mukhopadhyay, Jayanta
  and Paprzycki, Marcin
  and Li, Kuan-Ching",
  title="Practical Implications of Dequantization on Machine Learning Algorithms: A Survey",
  booktitle="International Symposium on Intelligent Informatics",
  year="2023",
  publisher="Springer Nature Singapore",
  address="Singapore",
  pages="29--39",
  abstract="Despite the promise for performance and accuracy improvements of quantum inspired (QI) algorithms over classical machine learning (ML) algorithms, such gains have not been realized in practice. The quantum inspired algorithms can theoretically achieve significant speed up based on sampling assumptions and have thus far failed to outperform the existing classical ML models in practical applications. The speedup of quantum machine learning (QML) algorithms assume the access to data in quantum random access memory (QRAM) which is a strong assumption with current quantum architectures. QI algorithms assume sample and query (SQ) access to input vector and norms of matrices using a dynamic data structure. We explore the components of these models and the assumptions in this paper by surveying the recent works in QML and QI Machine learning (QIML) algorithms. We limit our study to QML and QIML models on achieving a speed up over classical ML techniques rather than individual proofs of these algorithms. This study highlights the assumptions being made that are currently not practical for QML and QIML algorithms in achieving performance advantage over classical ML algorithms.",
  isbn="978-981-19-8094-7"}


---