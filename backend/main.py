from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Pipeline(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

def is_dag(nodes: List[Dict], edges: List[Dict]) -> bool:
    # Build adjacency list
    node_ids = {node['id'] for node in nodes}
    adj = {node_id: [] for node_id in node_ids}
    
    for edge in edges:
        source = edge.get('source')
        target = edge.get('target')
        if source in adj:
            adj[source].append(target)
    
    # DFS-based cycle detection
    # 0 = WHITE (unvisited), 1 = GRAY (visiting), 2 = BLACK (visited)
    color = {node_id: 0 for node_id in node_ids}
    
    def has_cycle(u):
        color[u] = 1 # GRAY
        for v in adj.get(u, []):
            if v not in color: # Should not happen in valid pipeline
                continue
            if color[v] == 1: # Cycle found
                return True
            if color[v] == 0:
                if has_cycle(v):
                    return True
        color[u] = 2 # BLACK
        return False
    
    for node_id in node_ids:
        if color[node_id] == 0:
            if has_cycle(node_id):
                return False # Not a DAG
                
    return True

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):
    nodes = pipeline.nodes
    edges = pipeline.edges
    num_nodes = len(nodes)
    num_edges = len(edges)
    dag_result = is_dag(nodes, edges)
    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': dag_result
    }
